import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screen/Welcome";
import CustomerCreate from "../screen/Customer/Create";
import CustomerList from "../screen/Customer/List";
import CustomerEdit from "../screen/Customer/Edit";
import CustomerView from "../screen/Customer/View";
import RegionList from "../screen/Region/List";
import { useDispatch } from "react-redux";
import { loadCustomers } from "../features/customers/reducers";
import CustomerToDeal from "../screen/Customer/CustomerToDeal";
import DashboardView from "../screen/Dashboard/View";
import InboxView from "../screen/Inbox/View";
import ChatView from "../screen/Chat/View";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const dispatch = useDispatch();
  dispatch(loadCustomers());

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DashboardView">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CustomerCreate" component={CustomerCreate} />
        <Stack.Screen name="CustomerList" component={CustomerList} />
        <Stack.Screen name="CustomerEdit" component={CustomerEdit} />
        <Stack.Screen name="CustomerView" component={CustomerView} />
        <Stack.Screen name="RegionList" component={RegionList} />
        <Stack.Screen name="CustomerToDeal" component={CustomerToDeal} />
        <Stack.Screen name="DashboardView" component={DashboardView} />
        <Stack.Screen name="InboxView" component={InboxView} />
        <Stack.Screen name="ChatView" component={ChatView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
