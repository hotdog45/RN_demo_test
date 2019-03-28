
///全局跳转工具
export default class NavigationUtil {

    static gotoBack(nav){
        nav.goBack();

    }
    static goMainPage(nav){
        nav.navigate('Main')

    }

}
