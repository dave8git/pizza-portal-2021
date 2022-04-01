import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, setTableStatus } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  setTableStatus: (payload) => dispatch(setTableStatus(payload)), // niech props będzie funkcją która wywoła dispatcha, 
});



export default connect(mapStateToProps, mapDispatchToProps)(Waiter);