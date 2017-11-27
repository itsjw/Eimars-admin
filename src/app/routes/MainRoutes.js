/* eslint no-process-env:0 */
import React                        from 'react';
import {
 Route,
 Switch,
 Redirect
}                                   from 'react-router-dom';
import HomeConnected                from '../views/home';
import AlertConnected               from '../views/alert';
import BasicElementsConnected       from '../views/basicElements';
import BasicProgressBarConnected    from '../views/basicProgressBar';
import BreadcrumbViewConnected      from '../views/breadcrumb';
import EarningGraphConnected        from '../views/earningGraph';
import GeneralConnected             from '../views/general';
import NotificationsConnected       from '../views/notifications';
import PageNotFoundConnected        from '../views/pageNotFound';
import PaginationViewConnected      from '../views/pagination';
import SimpleTablesConnected        from '../views/simpleTables';
import StatViewConnected            from '../views/stat';
import LoginConnected               from '../views/login';
import StatsCardConnected           from '../views/statsCard';
import StripedProgressBarConnected  from '../views/stripedProgressBar';
import TabPanelConnected            from '../views/tabPanel';
import TeamMatesViewConnected       from '../views/teamMates';
import TodoListViewConnected        from '../views/todoList';
import TwitterFeedConnected         from '../views/twitterFeed';
import WorkProgressConnected        from '../views/workProgress';


export const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomeConnected} />

    <Route path="/User/Role-Management" component={StatsCardConnected} />
    <Route path="/User/LoginAppUser" component={EarningGraphConnected} />
    <Route path="/User/AdminUser" component={NotificationsConnected} />
    <Route path="/User/AppUser" component={WorkProgressConnected} />
    <Route path="/User/Package" component={TwitterFeedConnected} />
    <Route path="/User/LoginAdminUser" component={TeamMatesViewConnected} />
    <Route path="/User/todoList" component={TodoListViewConnected} />

    <Route exact path="/simpleTables" component={SimpleTablesConnected} />

    <Route exact path="/basicElements" component={BasicElementsConnected} />

    <Route exact path="/general" component={GeneralConnected} />
    <Route path="/general/breadcrumb" component={BreadcrumbViewConnected} />
    <Route path="/general/stat" component={StatViewConnected} />
    <Route path="/general/basicProgressBars" component={BasicProgressBarConnected} />
    <Route path="/general/tabPanels" component={TabPanelConnected} />
    <Route path="/general/stripedProgressBars" component={StripedProgressBarConnected} />
    <Route path="/general/alerts" component={AlertConnected} />
    <Route path="/general/pagination" component={PaginationViewConnected} />

  </Switch>
);

export default MainRoutes;
