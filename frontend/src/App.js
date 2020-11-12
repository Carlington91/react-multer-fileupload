import { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Gallery from './component/Gallery'
import FileUpload from './component/FileUpload'
import Header from './component/Header'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Gallery} />
        <Route exact path='/uploads' component={FileUpload} />
      </Switch>

    </Fragment>
  );
}

export default App;
