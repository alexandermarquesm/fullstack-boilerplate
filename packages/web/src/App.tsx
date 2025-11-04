import { useState } from "react";
import { isFeatureEnabled, validateEmail, APP_VERSION, testBoolean } from "@monorepo/shared";

function App() {
  const [apiResponse, setApiResponse] = useState(null);
  const [apiError, setApiError] = useState<string | null>(null);
  
  const testBooleanResult = testBoolean();

  const testAPI = async () => {
    try {
      setApiError(null);
      const response = await fetch("/api/hello");
      
      if (!response.ok) {
        throw new Error(`API returned ${response.status}: ${response.statusText}`);
      }
      
      const text = await response.text();
      console.log("Raw API response:", text);
      
      const data = JSON.parse(text);
      setApiResponse(data);
      
    } catch (error: any) {
      console.error("API Error:", error);
      setApiError(error.message);
    }
  };

  const testHealth = async () => {
    try {
      setApiError(null);
      const response = await fetch("/api/health");
      
      if (!response.ok) {
        throw new Error(`Health check failed: ${response.status}`);
      }
      
      const text = await response.text();
      console.log("Health check response:", text);
      
      const data = JSON.parse(text);
      setApiResponse(data);
      
    } catch (error: any) {
      console.error("Health Check Error:", error);
      setApiError(error.message);
    }
  };

  const testBooleanFunction = () => {
    const result = testBoolean();
    alert(`testBoolean() retornou: ${result} (${result ? "✅ true" : "❌ false"})`);
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial", maxWidth: "800px", margin: "0 auto" }}>
      <h1>🚀 Fullstack Boilerplate</h1>
      <p>React + Express + Shared Package (Versão: {APP_VERSION})</p>
      
      <div style={{ margin: "20px 0" }}>
        <button onClick={testAPI} style={buttonStyle}>
          Test API Hello
        </button>
        
        <button onClick={testHealth} style={buttonStyle}>
          Test Health Check
        </button>
        
        <button onClick={testBooleanFunction} style={buttonStyle}>
          🧪 Test testBoolean()
        </button>
      </div>

      {apiError && (
        <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#ffebee", borderRadius: "5px", border: "1px solid #f44336" }}>
          <h3 style={{ color: "#d32f2f" }}>❌ API Error:</h3>
          <pre style={{ color: "#d32f2f" }}>{apiError}</pre>
        </div>
      )}

      {apiResponse && (
        <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f5f5f5", borderRadius: "5px" }}>
          <h3>📡 API Response:</h3>
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}

      <div style={{ margin: "20px 0", padding: "15px", backgroundColor: "#e8f5e8", borderRadius: "5px" }}>
        <h3>📦 Shared Package Status:</h3>
        <p>APP_VERSION: <strong>{APP_VERSION}</strong></p>
        <p>testBoolean(): <strong>{testBooleanResult ? "✅ true" : "❌ false"}</strong></p>
        <p>isFeatureEnabled("dark-mode"): <strong>{isFeatureEnabled("dark-mode") ? "✅ true" : "❌ false"}</strong></p>
        <p>validateEmail("test@example.com"): <strong>{validateEmail("test@example.com") ? "✅ true" : "❌ false"}</strong></p>
      </div>
    </main>
  );
}

const buttonStyle = {
  padding: "10px 15px", 
  margin: "5px",
  fontSize: "14px",
  backgroundColor: "#007acc",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

export default App;
