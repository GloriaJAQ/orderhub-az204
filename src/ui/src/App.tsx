import { useState, useEffect } from 'react';
 
function App() {
  const [health, setHealth] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const API_URL = import.meta.env.VITE_API_URL;
 
  const loadData = async () => {
    try {
      const hRes = await fetch(`${API_URL}/health`);
      setHealth(await hRes.json());
      const oRes = await fetch(`${API_URL}/orders`);
      setOrders(await oRes.json());
    } catch (error) {
      console.error("Error al conectar con la API:", error);
    }
  };
 
  useEffect(() => { loadData(); }, []);
 
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🚀 OrderHub Dashboard</h1>
      <button onClick={loadData} style={{ padding: '10px 20px', cursor: 'pointer', marginBottom: '20px' }}>
        🔄 Refresh Data
      </button>
 
      <div style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px' }}>
        <h3>Estado del Sistema:</h3>
        <p>Servicio: <strong>{health?.service || 'Cargando...'}</strong></p>
        <p>Estado: <strong>{health?.ok ? '✅ Online' : '⚠️ Revisar'}</strong></p>
      </div>
 
      <h3 style={{ marginTop: '30px' }}>Lista de Órdenes:</h3>
      <ul>
        {orders.map((order) => (
          <li key={order.id} style={{ marginBottom: '10px' }}>
            <strong>#{order.id}</strong> - {order.customer} 
            <span style={{ marginLeft: '10px', color: 'blue' }}>({order.status})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default App;
 
