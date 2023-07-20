export default function () {
  this.namespace = '/api';

  this.get('/products', function () {
    return {
      data: [
        {
          type: 'product',
          id: '1',
          attributes: {
            name: 'Strawberries',
            price: 5,
            code: 'SR1',
            offer: '3 for £13.50',
            image: '/images/products/strawberries.jpg',
            quantity: null,
          },
        },
        {
          type: 'product',
          id: '2',
          attributes: {
            name: 'Coffee',
            price: 11.23,
            code: 'CF1',
            offer: 'Multi-buy discount',
            image: '/images/products/coffee.jpg',
            quantity: null,
          },
        },
        {
          type: 'product',
          id: '3',
          attributes: {
            name: 'Green Tea',
            price: 3.11,
            code: 'GR1',
            offer: '2 for 1',
            image: '/images/products/green-tea.jpg',
            quantity: null,
          },
        },
      ],
    };
  });
}
