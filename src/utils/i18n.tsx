import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "title": "LINK - TREE"
    }
  },
  zh: {
    translation: {
      "title": "linktr.cn",
      "domain": "/",
      menu: {
        'home': '首页',
        'pricing': '价格',
        'about': '关于',
        'help': '帮助',
        'links': '链接',
        'lookup': '查找',
        'hooks': 'Hooks',
        'team': "团队"
      },
      about_us: {
        'title': "关于我们",
        'content': "让我们传播到世界的每一个角落。您仅需要一个链接便可以向世界展示所有你所想展示的。"
      },
      action: {
        'login': '登录',
        'signup': '注册',
        'signupAccount': '免费注册账号',
        'joinUs': '一键加入',
        'buyNow': '立刻购买',
        'learn_more': '了解更多'
      },
      model: {
        user: {
          email: { label: '邮箱' },
          password: { label: '密码' },
          username: { label: '用户名' },
          confirmation_password: { label: '确认密码' }
        }
      },
      pricing: {
        'title': '一链连世界',
        'subtitle': '您可以先选择一个适合您的计划，以后随时可以更改。',
        'free': '免费',
        'free_forever': '永久免费',
        'pro': '初级版',
        'month': '月',
        'enterprise': '高级版',
        'unlimited': '无限制链接',
        'support': '团队支持',
        'reports': '报表',
        'analytics': '报表，分析',
        'customization': '自定义',
        'integrations': '第三方集成',
      },
      tip: {
        'freeSignUp': '免费注册账号',
        'haveAccount': '已经有账号?',
        'gotoManagementPage': '进入管理面板',
        'nearestWithWorld': '一个链接可以让您离世界更近一些',
        'onlyOneLink': '世界可以您离近一点，再近一点',
        'takeYouToTheWorld': '您仅需要一个链接, 一个链接即可将您展示的内容带到整个世界!',
      },
      social: {
        'linkedin': 'LinkTr',
        'facebook': 'LinkTr',
        'twitter': 'LinkTr',
        'instagram': 'LinkTr'
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "zh",

    // keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
