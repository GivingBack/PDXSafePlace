import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { ResourceService } from '../resource.service';
import { Resource } from '../resource.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css'],
  providers: [ResourceService]
})
export class ResourceDetailComponent implements OnInit {
  resourceId: string;
  resourceToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private resourceService: ResourceService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.resourceId = urlParametersArray['id'];
    });
    this.resourceService.getResourceById(this.resourceId).subscribe(data => {
      this.resourceToDisplay = new Resource(
                                  data.name,
                                  data.type,
                                  data.description
      )}
    )}
}
