import { Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
}

export default function EventListScreen() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('https://gist.githubusercontent.com/kushagrakartikeye/859c6897af26b5ed72e904d5670e3fbe/raw/23499d95c20f60595078419ac2d0873a471fcc13/events.json'); // Replace with actual API
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setEvents(data.events);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );

  if (error)
    return (
      <View style={styles.center}>
        <Text>Error fetching events: {error}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Events</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.date}</Text>
            <Text>{item.location}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 28, marginBottom: 15, textAlign: 'center' },
  eventCard: { marginBottom: 10, padding: 15, backgroundColor: '#f2f2f2', borderRadius: 8 },
  title: { fontSize: 18, fontWeight: 'bold' },
});
