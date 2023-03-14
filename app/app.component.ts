import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {
  CompactType,
  DisplayGrid,
  GridsterComponentInterface,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponentInterface,
  GridType
} from 'angular-gridster2';

import { ProviderService } from './provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  remove: boolean;

  // This is user variable that should be loaded into widget with content
  public users;
  name = 'Angular';
  // Service is provided in the constructor -> service name 'ps'
  constructor(private ps: ProviderService) { }

  ngOnInit() {
    this.options = {
      gridType: GridType.Fixed,
      compactType: CompactType.None,
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      mobileBreakpoint: 640,
      minCols: 1,
      minRows: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        delayStart: 0,
        enabled: false,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
      },
      resizable: {
        delayStart: 0,
        enabled: true,
        handles: {
          s: true, e: true, n: true, w: true,
          se: true, ne: true, sw: true, nw: true
        }
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: {north: true, east: true, south: true, west: true},
      pushResizeItems: false,
      displayGrid: DisplayGrid.Always,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false
    };

    // Resovle the value in observable and ascribe it to class 'users' variable
    this.ps.getHeroes().subscribe((users) => { 
      this.users = users;  
    });

    this.dashboard = [
      {cols: 0.3, rows: 0.52, y: 0, x: 0}
    ];
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({});
  }

}
