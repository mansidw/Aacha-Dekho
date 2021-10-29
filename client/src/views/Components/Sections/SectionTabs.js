import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import YouTubeIcon from '@mui/icons-material/YouTube';
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import CheckIcon from '@mui/icons-material/Check';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);
export default function SectionTabs() {
  const classes = useStyles();
  const [message, setMessage] = useState([])
  let arr=['vMwjT26baE0','4J0pg1LmhQg','M7tsJ8-JdH8','qIsgdOVGA04','uxJShBPsU7s','AMCqrPcWi4M']//kata,mehendi,afreen,mr beast,upsc,harry potter
  useEffect(async () => {
    let dict={}
    dict['length']=arr.length;
    for(var i=0;i<arr.length;i++){
      dict['vid'+i] = arr[i];
    }
    // console.log(dict)
    await axios
    .get("http://127.0.0.1:5000/videodesc",{
      params: dict
    })
    .then(function (response) {
      for(var i=0;i<6;i++){
        setMessage(oldArray => [...oldArray, response.data[i]])
      }  
      // console.log(response.data);
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3 style={{fontFamily:'Quicksand',paddingBottom:'10px'}}>Some Example Videos</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                {/* <small>Tabs with Icons on Card</small> */}
              </h3>
              <CustomTabs
                myValue="vMwjT26baE0"
                headerColor="info"
                tabs={[
                  {
                    tabName: "Title",
                    tabIcon: Face,
                    tabContent: (
                      <>
                      <p className={classes.textCenter}>
                        {message[0] ? message[0]:'Nothing'}
                      </p>
                      
                      </>
                    ),
                  },
                  {
                    tabName: "Check ?",
                    tabIcon: CheckIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                        
                      </p>
                    ),
                  },
                  {
                    tabName: "Watch",
                    tabIcon: YouTubeIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                        
                      </p>
                    ),
                  },
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                {/* <small>Tabs with Icons on Card</small> */}
              </h3>
              <CustomTabs
                myValue="4J0pg1LmhQg"
                headerColor="info"
                tabs={[
                  {
                    tabName: "Title",
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.textCenter}>
                        {message[1] ? message[1]:'Nothing'}
                      </p>
                    ),
                  },
                  {
                    tabName: "Check ?",
                    tabIcon: CheckIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                        
                      </p>
                    ),
                  },
                  {
                    tabName: "Watch",
                    tabIcon: YouTubeIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                        
                      </p>
                    ),
                  },
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                {/* <small>Tabs with Icons on Card</small> */}
              </h3>
              <CustomTabs
                myValue="M7tsJ8-JdH8"
                headerColor="info"
                tabs={[
                  {
                    tabName: "Title",
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.textCenter}>
                        {message[2] ? message[2]:'Nothing'}
                      </p>
                    ),
                  },
                  {
                    tabName: "Check ?",
                    tabIcon: CheckIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                        
                      </p>
                    ),
                  },
                  {
                    tabName: "Watch",
                    tabIcon: YouTubeIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                        
                      </p>
                    ),
                  },
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                {/* <small>Tabs with Icons on Card</small> */}
              </h3>
              <CustomTabs
                myValue="qIsgdOVGA04"
                headerColor="info"
                tabs={[
                  {
                    tabName: "Title",
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.textCenter}>
                        {message[3] ? message[3]:'Nothing'}
                      </p>
                    ),
                  },
                  {
                    tabName: "Check ?",
                    tabIcon: CheckIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                        
                      </p>
                    ),
                  },
                  {
                    tabName: "Watch",
                    tabIcon: YouTubeIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                        
                      </p>
                    ),
                  },
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                {/* <small>Tabs with Icons on Card</small> */}
              </h3>
              <CustomTabs
                myValue="uxJShBPsU7s"
                headerColor="info"
                tabs={[
                  {
                    tabName: "Title",
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.textCenter}>
                        {message[4] ? message[4]:'Nothing'}
                      </p>
                    ),
                  },
                  {
                    tabName: "Check ?",
                    tabIcon: CheckIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                        
                      </p>
                    ),
                  },
                  {
                    tabName: "Watch",
                    tabIcon: YouTubeIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                        
                      </p>
                    ),
                  },
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                {/* <small>Tabs with Icons on Card</small> */}
              </h3>
              <CustomTabs
                myValue="AMCqrPcWi4M"
                headerColor="info"
                tabs={[
                  {
                    tabName: "Title",
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.textCenter}>
                        {message[5] ? message[5]:'Nothing'}
                      </p>
                    ),
                  },
                  {
                    tabName: "Check ?",
                    tabIcon: CheckIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                        
                      </p>
                    ),
                  },
                  {
                    tabName: "Watch",
                    tabIcon: YouTubeIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                        
                      </p>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
