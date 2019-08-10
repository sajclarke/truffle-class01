var abi = [
  {
    constant: true,
    inputs: [],
    name: 'totalPoints',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'numCustomers',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    name: 'customers',
    outputs: [
      {
        name: 'customerId',
        type: 'uint256'
      },
      {
        name: 'name',
        type: 'string'
      },
      {
        name: 'country',
        type: 'string'
      },
      {
        name: 'points',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_name',
        type: 'string'
      },
      {
        name: '_amount',
        type: 'uint256'
      },
      {
        name: '_country',
        type: 'string'
      }
    ],
    name: 'assignPoints',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: '_index',
        type: 'uint256'
      }
    ],
    name: 'getCustomer',
    outputs: [
      {
        name: '',
        type: 'string'
      },
      {
        name: '',
        type: 'uint256'
      },
      {
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      {
        name: '_index',
        type: 'uint256'
      },
      {
        name: '_newCountry',
        type: 'string'
      }
    ],
    name: 'setCustomerCountry',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'remainingPoints',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
];
