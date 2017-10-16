import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Resource } from '../resource.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ResourceService]
})
export class AdminComponent implements OnInit {

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
  }

  submitForm(name: string, type: string, description: string) {
    var newResource: Resource = new Resource(name, type, description);
    this.resourceService.addResource(newResource);
  }

}
