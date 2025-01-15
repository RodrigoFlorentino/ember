import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { task, timeout } from 'ember-concurrency';

export default class Rentals extends Component {
  
  @tracked query = '';

  constructor() {
    super(...arguments);
    this.loadRentals.perform();
  }

  @action
  updateQuery(event) {
    let formData = new FormData(event.currentTarget);
    this.query = formData.get('rental-search-term');
  }

  @action
  handleSubmit(event) {
    event.preventDefault();
    this.updateQuery(event);
  }

  @task
  *loadRentals() {
    yield timeout(5000); // Simula o loading
    this.rentals = this.args.rentals;
  }


}