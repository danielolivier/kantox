import Component from '@glimmer/component';

export default class NavbarComponent extends Component {
  NAVBAR_ITEMS = [
    {
      name: 'Groceries',
      selected: true,
      disabled: false,
    },
    {
      name: 'Wine',
      selected: false,
      disabled: true,
    },
    {
      name: 'Clothes',
      selected: false,
      disabled: true,
    },
    {
      name: 'FX',
      selected: false,
      disabled: true,
    },
  ];
}
