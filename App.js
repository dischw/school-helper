import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function AgendaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Agenda</Text>
      {/* TODO: Implement agenda list with tasks and classes */}
    </View>
  );
}

function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calendar</Text>
      {/* TODO: Implement weekly calendar grid */}
    </View>
  );
}

function NotesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notes</Text>
      {/* TODO: Implement notes list and editor */}
    </View>
  );
}

function ChartsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Charts</Text>
      {/* TODO: Implement performance and attendance charts */}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          initialRouteName="Agenda"
          screenOptions={{
            tabBarIndicatorStyle: { backgroundColor: '#6200ee' },
          }}
        >
          <Tab.Screen name="Agenda" component={AgendaScreen} />
          <Tab.Screen name="Calendar" component={CalendarScreen} />
          <Tab.Screen name="Notes" component={NotesScreen} />
          <Tab.Screen name="Charts" component={ChartsScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
