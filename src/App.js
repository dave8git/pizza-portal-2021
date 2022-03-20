import Reat from 'react';

function App() {
  return (
    
      <BrowserRouter basename={'/panel'}>
        <MainLayout>
          <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} /> 
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={TablesBookingNew} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBookingID} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TableEventNew} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEventID} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterOrderNew} /> 
              <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrderID} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
  );
}

export default App;
