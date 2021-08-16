// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;

contract Shop {
    uint256 public order_count = 0;
    mapping(uint256 => Order) public orders;

    struct Order {
        uint256 order_id;
        mapping(uint256 => uint256) items;
        uint256 item_count;
        address account;
        uint256 total;
    }

    function createOrder(uint256[] memory ids, uint256 total) public {
        require(msg.sender != address(0));
        require(ids.length > 0);

        orders[order_count].order_id = order_count;
        orders[order_count].item_count = ids.length;
        orders[order_count].account = msg.sender;
        orders[order_count].total = total;
        for (uint256 i = 0; i < ids.length; i++) {
            orders[order_count].items[i] = ids[i];
        }
        order_count++;
        emit orderCreated(order_count, ids.length, total);
    }

    function getOrder(uint256 id)
        public
        returns (
            uint256 order_id,
            uint256 item_count,
            address account,
            uint256 total
        )
    {
        return (
            orders[id].order_id,
            orders[id].item_count,
            orders[id].account,
            orders[id].total
        );
    }

    function getItem(uint256 order_id, uint256 item_index)
        public
        returns (uint256 item_id)
    {
        return (orders[order_id].items[item_index]);
    }

    event orderCreated(uint256 order_id, uint256 item_count, uint256 total);
}
