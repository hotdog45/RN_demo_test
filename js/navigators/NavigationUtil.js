
///全局跳转工具
export default class NavigationUtil {
    /**
     * 跳转到指定页面
     * @param params 要传递的参数
     * @param page 要跳转的页面名
     **/
    static goPage(params, page) {
        const navigation = NavigationUtil.navigation;
        if (!navigation) {
            console.log('NavigationUtil.navigation can not be null')
            return;
        }
        navigation.navigate(
            page,
            {
                ...params
            }
        )
    }
    static gotoBack(nav){
        nav.goBack();

    }
    static goMainPage(nav){
        nav.navigate('Main')

    }

}
