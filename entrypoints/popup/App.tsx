function App() {
  const fillForm = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (!tab.id) return;

    chrome.tabs.sendMessage(tab.id, {
      type: "FILL_FORM",
    });

    console.log("✅ Fill message sent");
  };

  return (
    <div style={{ padding: 20, width: 250 }}>
      <h2>Eduapplify</h2>

      <button
        onClick={fillForm}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Fill Form
      </button>
    </div>
  );
}

export default App;