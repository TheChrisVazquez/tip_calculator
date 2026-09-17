import MenuItems from "./components/MenuItems"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { addItem, order, removeItem } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-4">
        <h1 className="text-center text-4xl font-bold">Tip Calculator</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItems key={item.id}
                item={item}
                addItem={addItem}
              />

            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 rounded-lg p-5 space-y-10">
          <OrderContents
            order={order}
            removeItem={removeItem} />
        </div>
      </main>
    </>
  )
}

export default App
