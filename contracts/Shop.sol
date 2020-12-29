pragma experimental ABIEncoderV2;

contract Shop {
  uint public order_count = 0;
  mapping(uint => Order) public orders;

  struct Order{
    uint order_id;
    mapping(uint => uint) items;
    uint item_count;
    address account;
  }

  function createOrder(uint[] memory ids) public {
    require(msg.sender!=address(0));
    require(ids.length > 0);

    orders[order_count].order_id = order_count;
    orders[order_count].item_count = ids.length;
    orders[order_count].account = msg.sender;
    for (uint i = 0; i < ids.length; i++){
      orders[order_count].items[i] = ids[i];
    }
    order_count ++;
  }

  function getOrder(uint order_id) public returns (uint item_count, address account){
    return (orders[order_id].item_count, orders[order_id].account);
  }

  function getItem(uint order_id, uint item_index) public returns (uint item_id){
    return (orders[order_id].items[item_index]);
  }
}
