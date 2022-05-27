


export default function Modal({isOpen, children}) {

  return (
    <section>
       
      <div className={`${!isOpen && 'hidden' } fixed inset-0 z-10 overflow-y-auto`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
           { isOpen && 
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" ariaHidden="true"></div> 
          }
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          { children }
        </div>
      </div>
    </section>
  )
}
