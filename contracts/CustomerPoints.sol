pragma solidity^0.5.0;

contract CustomerPoints {

    uint public numCustomers = 0;   
    uint public totalPoints = 1000000;
  
  struct Customer {
    uint customerId;
    string name;
    string country;
    uint points;
  }
  
  mapping(uint => Customer) public customers;
  
  constructor() public {
    assignPoints('Elon Musk',1000,'Barbados');
  }

  function assignPoints(string memory _name, uint _amount, string memory _country) public {
      
    bytes memory _nameBytes = bytes(_name);
    require(_nameBytes.length > 5,"Name is too short");
    require(totalPoints > _amount,"Insufficient funds to allow transfer");
    if(totalPoints < _amount)
        revert("Not enough points available.");
    assert(totalPoints > _amount);
    totalPoints = totalPoints-_amount;
    numCustomers++;
    customers[numCustomers] = Customer(numCustomers, _name, _country, _amount);
    
  }
  
  function getCustomer(uint _index) view public returns(string memory, uint, string memory){
  	return (customers[_index].name, customers[_index].points, customers[_index].country);
  }
  
  function setCustomerCountry(uint _index, string memory _newCountry) public{
    customers[_index].country = _newCountry;
  }
    
    function remainingPoints() view public returns (uint) {
        return totalPoints;
    }

}