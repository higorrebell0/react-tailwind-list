import { Plus, FileDown } from 'lucide-react'

export function App() {
  return (
    <div className="py-10 space-y-8">
        <h1> Hello World! </h1>
        <div>header</div>
        <div>aba</div>
        <main className="max-w-6xl mx-auto space-y-5">
           <div className='flex items-center gap-3'>
                <h1 className="text-xl font-bold">Tags</h1>
                <button className='inline-flex items-center, gap-1.5 text-xs bg-teal-300 text-teal-950 font-medium rounded-full px-2 py-1'>
                    <Plus className='size-3' />
                    Create New
                </button>
           </div>

           <div className='flex items-center justify-between'>
                <div>FILTRO</div>
                <button className='inline-flex items-center, gap-1.5 text-xs bg-teal-300 text-teal-950 font-medium rounded-full px-2 py-1'>
                    <FileDown className='size-3' />
                    Export
                </button>
           </div>
        </main>
    </div>
  )
}

export default App
