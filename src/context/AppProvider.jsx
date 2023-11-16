import AppContext from './AppContext'; // Контекст використовується для передачі даних і функцій між компонентами без явної передачі через props

const AppProvider = (props) => { // Цей компонент обертає інші компоненти, надаючи їм доступ до стану та функцій через контекст
   
    const {value, children} = props
    console.log({})
    

  return (
    <AppContext.Provider value={value} > {/* обертаємо дочірні компоненти в AppContext.Provider*/}
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;


