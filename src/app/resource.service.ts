import { Injectable } from '@angular/core';
import { Resource } from './resource.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ResourceService {
  resources: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.resources = database.list('resources');
  }

  getResources() {
    return this.resources;
  }

  addResource(newResource: Resource) {
    this.resources.push(newResource);
  }

  getResourceById(resourceId: string) {
    return this.database.object('/resources/' + resourceId);
  }

  updateResource(updatedResource){
    var resourceItem = this.getResourceById(updatedResource.$key);
    resourceItem.update({title: updatedResource.name,
                                artist: updatedResource.type,
                                description: updatedResource.description});
  }
}
