import { Component, Input, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-edit-resource',
  templateUrl: './edit-resource.component.html',
  styleUrls: ['./edit-resource.component.css'],
  providers: [ResourceService]
})
export class EditResourceComponent implements OnInit {
    @Input() selectedResource;

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
  }

  beginUpdatingResource(resourceToUpdate){
    this.resourceService.updateResource(resourceToUpdate);
  }

}
