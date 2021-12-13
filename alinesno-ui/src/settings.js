const defaultTitle = '新狐云数字化平台'
const titleFromVars = process.env.VUE_APP_SASS_TITLE
module.exports = {
  title: titleFromVars ? titleFromVars : defaultTitle,

  /**
   * 侧边栏主题 深色主题theme-dark，浅色主题theme-light
   */
  // sideTheme: 'theme-dark',
  sideTheme: 'theme-light',

  /**
   * 是否系统布局配置
   */
  showSettings: false,

  /**
   * 是否显示顶部导航
   */
  topNav: false,

  /**
   * 是否显示 tagsView
   */
  tagsView: false,

  /**
   * 是否固定头部
   */
  fixedHeader: false,

  /**
   * 是否显示logo
   */
  sidebarLogo: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}

