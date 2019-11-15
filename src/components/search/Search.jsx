import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { term, data, update } = this.props;

    const dataSearch = e => {
      const value = e.target.value;
      let filter = data;
      if (value) {
        let regexp = />(.*?)</g;
        const result = data.match(regexp);
        const chars = /&nbsp;/g;
        const search = new RegExp(value, "i");
        const result_arr = result.map(item => {
          if (item.search(chars) !== -1) {
            item = item.replace(chars, " ");
          }
          let cloneStr = item.toLowerCase();
          if (cloneStr.includes(value.toLowerCase())) {
            let valueLength = value.length;
            let startIndex = 0;
            let item_arr = [];
            while (cloneStr.includes(value.toLowerCase())) {
              let searchIndex = cloneStr.search(search);
              item_arr.push(item.slice(0, searchIndex));
              let lightStr =
                '<span style="background-color: red">' +
                item.substring(searchIndex, valueLength + searchIndex) +
                "</span>";
              item_arr.push(lightStr);
              startIndex = valueLength + searchIndex;
              cloneStr = cloneStr.slice(startIndex);
              item = item.slice(startIndex);
            }
            item_arr.push(item);
            item = item_arr.join("");
          }
          return item;
        });

        for (let i = 0; i < result.length; i++) {
          filter = filter.replace(result[i], result_arr[i]);
        }
      }
      update({ data: filter, active: 0, term: value });
    };

    return (
      <div className='searchbar form-group'>
        <input
          value={term}
          type='text'
          className='form-control'
          placeholder='Search...'
          onChange={dataSearch}
        />
      </div>
    );
  }
}
