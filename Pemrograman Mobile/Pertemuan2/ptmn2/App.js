import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView style={styles.bg}>
      <View style={styles.container}>

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.number}>PROFILE</Text>
            <Text style={styles.title}>Rizky Fadilah</Text>
          </View>
          <View style={styles.iconBox}>
            <Ionicons name="person" size={28} color="#fff" />
          </View>
        </View>

        <View style={styles.line} />

        {/* DATA DIRI */}
        <Text style={styles.section}>DATA DIRI</Text>

        <Info
          icon="person-outline"
          label="NAMA LENGKAP"
          value="Rizky Fadilah"
        />

        <Info
          icon="card-outline"
          label="NIM"
          value="2488010040"
        />

        <Info
          icon="school-outline"
          label="ASAL SEKOLAH"
          value="SMAN 1 Mandirancan"
        />

        {/* CITA-CITA */}
        <View style={styles.dream}>
          <View style={styles.dreamIcon}>
            <Ionicons name="rocket" size={25} color="#111" />
          </View>

          <View>
            <Text style={styles.dreamLabel}>CITA-CITA</Text>
            <Text style={styles.dreamTitle}>Full Stack Developer</Text>
          </View>
        </View>

        {/* RENCANA */}
        <Text style={styles.section}>RENCANA</Text>

          <Plan icon="code-slash" text="Memperkuat kemampuan programming" />
          <Plan icon="desktop-outline" text="Memperdalam frontend development" />
          <Plan icon="server-outline" text="Memperdalam backend dan database" />
          <Plan icon="layers-outline" text="Membuat project fullstack" />

        <Text style={styles.footer}>REACT NATIVE / 2026</Text>  

        <StatusBar style="dark" />
      </View>
    </ScrollView>
  );
}

function Info({ icon, label, value }) {
  return (
    <View style={styles.info}>
      <Ionicons name={icon} size={24} color="#111" />

      <View style={styles.infoContent}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

function Plan({ icon, text }) {
  return (
    <View style={styles.plan}>
      <Ionicons name={icon} size={22} color="#111" />
      <Text style={styles.planText}>{text}</Text>
      <Ionicons name="arrow-forward" size={18} color="#777" />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#EAEAE5',
  },

  container: {
    padding: 22,
    paddingTop: 55,
    paddingBottom: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  number: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
  },

  title: {
    fontSize: 30,
    fontWeight: '900',
    marginTop: 7,
  },

  iconBox: {
    backgroundColor: '#111',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },

  line: {
    height: 3,
    backgroundColor: '#111',
    marginVertical: 25,
  },

  section: {
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 12,
  },

  info: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 17,
    marginBottom: 9,
    borderWidth: 1,
    borderColor: '#D2D2CD',
  },

  infoContent: {
    marginLeft: 15,
  },

  label: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 5,
  },

  value: {
    fontSize: 16,
    fontWeight: '700',
  },

  dream: {
    backgroundColor: '#111',
    padding: 18,
    marginVertical: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },

  dreamIcon: {
    backgroundColor: '#fff',
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  dreamLabel: {
    color: '#aaa',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 2,
  },

  dreamTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '900',
    marginTop: 4,
  },

  plan: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D2D2CD',
  },

  planText: {
    flex: 1,
    fontSize: 13,
    fontWeight: '600',
    marginHorizontal: 13,
  },

  footer: {
    textAlign: 'center',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 2,
    marginTop: 25,
  },
});