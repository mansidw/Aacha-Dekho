import os
from textblob import TextBlob
from langdetect import detect
from monkeylearn import MonkeyLearn
import paralleldots
import googleapiclient.discovery
from flask import Flask,render_template, redirect, url_for, request, flash,jsonify
import time
from flask_cors import CORS 
import requests
import urllib.request
import json
import urllib
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

scopes = ["https://www.googleapis.com/auth/youtube.readonly"]
os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

api_service_name = "youtube"
api_version = "v3"
DEVELOPER_KEY = os.getenv('DEVELOPER_KEY')
client_secrets_file = "client_secret.json"

@app.route('/video', methods=['GET'])
def main():
    if request.method == 'GET':
        ml = MonkeyLearn(os.getenv('MONKEY_LEARN'))
        paralleldots.set_api_key(os.getenv('PARALLEL'))

        youtube = googleapiclient.discovery.build(
            api_service_name, api_version, developerKey = DEVELOPER_KEY)

        ans = youtube.commentThreads().list(
            part="snippet",
            videoId=request.args.get('videoid'),
            maxResults=100
        )
        response = ans.execute()
        model_id = 'cl_pi3C7JiL'
        data=[]
        for i in range (0,30):
            try:
                lang=response['items'][i]['snippet']['topLevelComment']['snippet']['textDisplay']
            except:continue
            try:
                if detect(lang)=='en':
                    data.append(lang)
                
            except:
                continue
                
        result = ml.classifiers.classify(model_id, data)
        print(result.body[0]['classifications'][0]['tag_name'])
        pcount=0
        leng=len(data)
        # result = paralleldots.batch_sentiment(data)
        response=paralleldots.batch_sarcasm(data)
        # print(result['sentiment'][0])

        for i in range(0,leng):
            if result.body[i]['classifications'][0]['tag_name'] == 'Positive' and response[i]['Sarcastic']<response[i]['Non-Sarcastic']:
                pcount+=1
            # print(i['classifications'][0]['tag_name'])
        res={}
        if pcount>=leng//2:
            print(pcount,'/',leng)
            res['positive'] = str(pcount/leng*100)
            return(res)
            
        else:
            print(pcount,'/',leng)
            res['negative'] = str(pcount/leng*100)
            return(res)
        
        
@app.route('/videodesc',methods = ['GET'])
def videodesc():
    if request.method=='GET':
        arr={}
        j=0
        # print('yes here')
        # print(request.args.get('vid{}'))
        for i in range(0,int(request.args.get('length'))):
            x='vid{}'
            a=x.format(i)
            VideoID = request.args.get(a)
            # print(VideoID)
            params = {"format": "json", "url": "https://www.youtube.com/watch?v=%s" % VideoID}
            url = "https://www.youtube.com/oembed"
            query_string = urllib.parse.urlencode(params)
            url = url + "?" + query_string
            with urllib.request.urlopen(url) as response:
                response_text = response.read()
                data = json.loads(response_text.decode())
                arr[i]=[data['title']]
        # print(arr)
        return arr
      
   



    
  
if __name__ == '__main__':
  app.run(debug=True)