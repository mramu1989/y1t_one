/**
ZH: Chinese Language 
*/

var Translations = {
    "SkipBackButtonText": "Skip back",
    "SkipForwardButtonText": "Skip forward",
    "PlayPauseButtonText": "Play/Pause",
    "VolumeButtonText": "Volume",
    "SettingsButtonText": "Settings",
    "ResumeVideoPlayback": "Resume Video Playback",

    "QualityMenuText": "Quality",
    "QualityAutoText": "Auto",
    "LanguageMenuText": "Language",
    "CCMenuText": "Captions",
    "BackFromText": "Back from",
    "OnText": "On",
    "OffText": "Off",

    "SocialIcon-facebook": "Facebook",
    "SocialIcon-twitter": "Twitter",
    "SocialIcon-googleplus": "Google+",
    "SocialIcon-email": "Email",
    "SocialIcon-link": "Website",
    "CollapseText": "Collapse",
    "ExpandText": "Expand",

    "PreparedForText": "Prepared for",

    "CopyrightText": "Copyright " + Utils.getFullYear() + " Client Name",
    "PoweredByFooterText": "Powered by",
    "HelpFooterText": "Help",
    "PrivacyPolicyFooterText": "Privacy Policy",

    /**
     * Settings for the CTA buttons.
     *
     * In this object you can define up to 5 CTA buttons, each with a "label" and "icon" property.
     * The key for each object should be unique to each button. And the "icon" property should correspond to
     * a CTA icon CSS class in the form of ".cta__icon--<icon>".
     *
     * In addition, each button can either have a "card" or "url" property to define its function.
     *
     * "card" buttons activate a side card that is defined in the video project. This property should have the value
     * of the target cards id from the Interactions Manager in the EOV Director.
     *
     * "url" buttons will open the specified URL in a new window/tab when clicked
     *
     * If the CTA buttons are not required then remove the content from the variable - "CtaButtonSettings": {};
     */
    "CtaButtonSettings": {
        "button1": {
            "url": "http://www.y1t.com/contactus",
            "label": "联系",
            "icon": "contact"
        },
        "button2": {
            "url": "http://www.y1t.com/",
            "label": "网站",
            "icon": "website"
        },
        "button3": {
            "card": "956c7c5a",
            "label": "电子邮件",
            "icon": "email"
        },
        "button4": {
            "card": "0477cd97",
            "label": "保存",
            "icon": "save"
        },
        "button5": {
            "card": "0567ee2e",
            "label": "分享",
            "icon": "share"
        }
    },

    /**
     * Settings for the promo graphic sections. Between 1 and 5 promo areas can be added to the page. 
     * The portrait images need to be configured to the correct ratio as per the CTA buttons in the template files.
     *
     * Each promo graphic requires the following:
     *
     * "trackingName" to define how clicks on it will be tracked within the EngageOne Video platform
     * "url" to go to when the promo is clicked
     * "desktopImage" the relative path to the promo image used on desktop breakpoints. This should be portrait.
     * "mobileImage" the relative path to the promo image used on mobile breakpoints. This should be landscape.
     *
     * If the promo area is not required then remove the content from the variable - "PromoSettings": {};
     */
    "PromoSettings": {
        "promo1": {
            "trackingName": "promo1",
            "url": "http://www.4008000000.com/cpchexian/sem/newm.shtml?area=ec03-wm-pingankeji-02&WT.mc_id=ec03-wm-pingankeji-005",
            "label": "Promo (Top)",
            "desktopImage": "./images/promo1_portrait.png",
            "mobileImage": "./images/promo1_landscape.png"
        },
        "promo2": {
            "trackingName": "promo2",
            "url": "http://www.y1t.com/insurance",
            "label": "Promo (Bottom)",
            "desktopImage": "./images/promo2_portrait.png",
            "mobileImage": "./images/promo2_landscape.png"
        }
    },

    /**
     * Chapter settings used to build the timeline and StateMap, which maps video states to friendly names.
     *
     * Within each "chapter" one or more states can exist. The state "width" specifies the width of the "chapter",
     * expressed as a percentage. The state "cardId" corresponds to the states id in the EngageOne Video Director.
     * There also exists "label" which specifies the label for the timeline "chapter".
     *
     * All videos have an END state, this should not be defined here as it is an implicit construct.
     */
    "ChapterSettings": [
        {
            "label": "欢迎",
            "states": [
                {
                    "cardId": "START",
                    "width": 12
                }
            ]
        },		
        {
            "label": "健康360° 政策介绍",
            "states": [
                {
                    "cardId": "f17a656d",
                    "width": 8
                },			
                {
                    "cardId": "f3f02a2a",
                    "width": 11
                }
            ]
        },
        {
            "label": "需要报价",
            "states": [
                {
                    "cardId": "707dfedd",
                    "width": 1
                },
                {
                    "cardId": "0213699a",
                    "width": 19
                }
            ]
        },
		{
            "label": "问答解答",
            "states": [
                {
                    "cardId": "efc30ad8",
                    "width": 1
                },
                {
                    "cardId": "26ec708a",
                    "width": 13
                }
            ]
        },
		{
            "label": "申请试用",
            "states": [
                {
                    "cardId": "d17a2140",
                    "width": 1
                },
                {
                    "cardId": "8861d791",
                    "width": 19
                }
            ]
        },		
        {
            "label": "感谢您",
            "states": [
                {
                    "cardId": "09e4b44f",
                    "width": 15
                }
            ]
        }
    ]
}
