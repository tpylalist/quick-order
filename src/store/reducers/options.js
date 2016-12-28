const initialState = {
  manageGoodsOnStockQty: true,
  managePositionIsActiveProp: false,
  orderNoActivePositions: false,
  positionIsActiveDefinition: '',
  showGoodsOnStockQty: false,
  showNoActivePosition: false,
  catalogListSettings: ['code', 'description', 'price', 'qty'],
  catalogListColumns: {}
};

export default (state, action) => {
  switch (action.type) {
    case 'RECEIVE_OPTIONS':
      return { ...state, ...action.payload };
    case 'SET_OPTION':
      return { ...state, [action.option]: action.value };
    default: 
      return state || initialState;
  }
};

// Selectors

export const getColumns = (state) => {
  const { catalogListSettings, catalogListColumns } = state;
  const result = [ ...catalogListSettings ];
  const columnsKeys = Object.keys(catalogListColumns);
  const addition = columnsKeys.reduce((res, key) => {
    return result.indexOf(key) === -1 && catalogListColumns[key][0]  ? res.concat(key) : res; 
  }, []);
  return [ ...result, ...addition ];
};
