import "./scss/custom.scss"

function App() {
  return (
    <div className="app bg-gradient">
      <header className="container text-white pt-2 h2">
        Weather<i className="bi bi-thermometer-sun"></i>
      </header>
      <main className="container d-inline-flex p-2 bd-highlight justify-content-end">
        <i class="bi bi-emoji-sunglasses"></i>
      </main>
    </div>
  );
}

export default App;
