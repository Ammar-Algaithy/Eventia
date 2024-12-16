import { useEffect } from 'react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';

function App() {

  const {activityStore} = useStore();

  useEffect(() => {
    if (activityStore.activityRegistry.size === 0) {
        activityStore.loadActivities();
    }
}, [activityStore]);

  
  if (activityStore.loadingInitial) return <LoadingComponent content='Loading ...' />
  return (
    <main>
      <NavBar />
      {/* Dashboard */}
      <div>
        <ActivityDashboard />
      </div>
    </main>
  );
}

export default observer(App);
