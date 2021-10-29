import React , {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import axios from 'axios';
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-kit-react/components/customTabsStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTabs(props) {
  const [value, setValue] = React.useState(0);
  const [lelo,setLelo] = useState({});

  const handleChange = (event, value) => {
    // console.log("mansi")
    // console.log(myValue)
    if(value==1 && !lelo[[myValue]]){
        // console.log("yay I am profile")
        axios
        .get("http://127.0.0.1:5000/video",{
          params: {'videoid': myValue}
        })
        .then(function (response) {
          if(response.data['positive']){
            setLelo({...lelo, [myValue] :"Yay Good Choice can watch the video! You will agree with "+response.data['positive']+"% people :)"})
          }
          else{
            setLelo({...lelo, [myValue] :"Aww Wrong Choice! Saved you right there. "+response.data['negative']+"% people found it good :("})
          }
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
        
        // 
        // 
    }
    else if(value==2){
      window.open("https://www.youtube.com/watch?v="+[myValue])
    }
    setValue(value);
  };
  const classes = useStyles();
  const { myValue, headerColor, plainTabs, tabs, title, rtlActive } = props;
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive,
  });
  




  return (
    <Card plain={plainTabs}>
      <CardHeader color={headerColor} plain={plainTabs}>
        {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
        <Tabs
          value={value}
          x={myValue}
          onChange={handleChange}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.displayNone,
          }}
        >
          {tabs.map((prop, key) => {
            var icon = {};
            if (prop.tabIcon) {
              icon = {
                icon:
                  typeof prop.tabIcon === "string" ? (
                    <Icon>{prop.tabIcon}</Icon>
                  ) : (
                    <prop.tabIcon />
                  ),
              };
            }
            return (
              <Tab
                classes={{
                  root: classes.tabRootButton,
                  label: classes.tabLabel,
                  selected: classes.tabSelected,
                  wrapper: classes.tabWrapper,
                }}
                key={key}
                label={prop.tabName}
                {...icon}
              />
            );
          })}
        </Tabs>
      </CardHeader>
      <CardBody>
        {lelo ? tabs.map((prop, key) => {
          if (key === value && value==0) {
            return <div key={key}>{prop.tabContent}</div>;
          }
          else if(key === value && value==1){
            return (<div key={key}>{lelo[[myValue]]}</div>)
          }
          return null;
        }): <></>} 
        
      </CardBody>
    </Card>
  );
}

CustomTabs.propTypes = {
  headerColor: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose",
  ]),
  myValue: PropTypes.string,
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node.isRequired,
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool,
};
