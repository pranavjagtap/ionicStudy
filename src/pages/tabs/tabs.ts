import { Component } from '@angular/core';
import { FavoritesPage } from "../favorites/favorites";
import { LibraryPage } from "../library/library";


/* Tabs take only bottom of the page and willload new page from their.
   Tabs are used because if we push a page it replaces whole screen.
   But we dont want to override whole screen instead we want ot keep the 
   bottom tabs setion and override only the section above tabs (seen in bottom).
*/

/*  
    Bydefault first tab is selected and we can change it using selectedIndex property
    of ion-tabs selector. for example, selectedIndex="1" will show the second tab
    selected when that page is opened.
*/
@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs selectedIndex>
            <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
            <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
        </ion-tabs>
    `
})
export class TabsPage {
    favoritesPage = FavoritesPage;
    libraryPage = LibraryPage;
}