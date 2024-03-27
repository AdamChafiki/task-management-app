import { initialProfile } from "@/lib/initial-profile";

const Dashboard = async () => {
    const profile = await initialProfile();
    return ( <div className="p-2"> Welcome to your dashboard {profile.name}</div> );
}
 
export default Dashboard;