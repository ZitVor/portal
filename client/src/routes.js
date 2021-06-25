import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { Practice } from './pages/Practice/Practice'
import { Forum } from './pages/Forum/Forum'
import {Rate} from './pages/Rate'
import { SuperUser } from './pages/SuperUser/SuperUser'
import {Theory} from './pages/Theory/Theory'
import {Sharp} from './pages/Theory/Sharp'
import {JS} from './pages/Theory/JS'
import {Java} from './pages/Theory/Java'
import {SQL} from './pages/Theory/Sql'
import {Cpp} from './pages/Theory/Cpp'
import {PracticeFromUsers}  from './pages/Practice/PracticeFromUsers'
import {PracticeFromSite}  from './pages/Practice/PracticeFromSite'
import {ForumTheme} from '../src/pages/Forum/ForumTheme'
import {AddTask} from './pages/SuperUser/AddTask'
import {Estimate} from './pages/SuperUser/Estimate'
import {CreateTheme} from './pages/Forum/CreateTheme'
import {SiteTask} from './pages/Practice/SiteTask'
import {UserTask} from './pages/Practice/UserTask'
import {Admin} from './Admin/Admin'
import {AdminThemes} from './Admin/AdminThemes'
import { YourTask } from './Auth/YourTask'
import {AdminComments} from './Admin/AdminComments'
import { DecisiveCall } from './pages/SuperUser/DecisiveCall'
import {AdminUsers} from './Admin/AdminUsers'
import { CarriedOut } from './Auth/CarriedOut'
import {AdminPractice} from './Admin/AdminPractice'
import { HandedOver } from './Auth/HandedOver'
import {Appreciated} from './Auth/Appreciated'
import { DoneInfo } from './Auth/DoneInfo'
import {Asp} from './pages/Theory/C#/Asp'
export const useRoutes = isAuthenticated => {
if(isAuthenticated){
    //TODO  добавить переход по айди темы
    return (
        <Switch>
            <Route path="/theory" exact>
                <Theory/>
            </Route>
            <Route path="/asp" exact>
                <Asp/>
            </Route>
            <Route path="/doneinfo/:id" exact>
                <DoneInfo/>
            </Route>
            <Route path="/decisivecall" exact>
                <DecisiveCall/>
            </Route>
            <Route path="/carriedout" exact>
                <CarriedOut/>
            </Route>
            <Route path="/appreciated" exact>
                <Appreciated/>
            </Route>
            <Route path="/handedover" exact>
                <HandedOver/>
            </Route>
            <Route path="/yourtask" exact>
                <YourTask/>
            </Route>
            <Route path="/theory/Sharp" exact>
                <Sharp />
            </Route>
            <Route path="/theory/JS" exact>
                <JS />
            </Route>
            <Route path="/theory/sql" exact>
                <SQL />
            </Route>
            <Route path="/theory/java" exact>
                <Java />
            </Route>
            <Route path="/theory/cpp" exact>
                <Cpp />
            </Route>
            <Route path="/superuser" exact>
                <SuperUser/>
            </Route>
            <Route path="/superuser/addtask" exact>
                <AddTask />
            </Route>
            <Route path="/superuser/estimate/:id" exact>
                <Estimate />
            </Route>
            <Route path="/practice" exact>
                <Practice />
            </Route>
            
            <Route path="/practice/fromUsers" exact>
                <PracticeFromUsers />
            </Route>
            <Route path="/practice/fromSite" exact>
                <PracticeFromSite />
            </Route>
            <Route path="/forum" exact>
                <Forum />
            </Route>
            <Route path="/theme/:id" exact>
                <ForumTheme />
            </Route>
            <Route path="/forum/createtheme" exact>
                <CreateTheme />
            </Route>
            <Route path="/userrate/" exact>
                <Rate />
            </Route>
            <Route path="/admin" exact>
                <Admin />
            </Route>
            <Route path="/admin/themes" exact>
                <AdminThemes />
            </Route>
            <Route path="/admin/users" exact>
                <AdminUsers />
            </Route>
            <Route path="/admin/comments" exact>
                <AdminComments />
            </Route>
            <Route path="/admin/comments" exact>
                <AdminComments />
            </Route>
            <Route path="/admin/tasks" exact>
                <AdminPractice />
            </Route>
            <Route path="/usertask/:id" exact>
                <UserTask />
            </Route>
            <Route path="/sitetask/:id" exact>
                <SiteTask />
            </Route>

            

            <Redirect to="/theory"/>
        </Switch>
    )

}
return(
    <Switch>
        <Route path="/" exact>
            <AuthPage/>
        </Route>
        <Redirect to="/"/>
    </Switch>
    )
}