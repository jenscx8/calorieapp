// storage controller

// item controller
const ItemCtrl = (function() {
  // item constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // data structure / state
  const data = {
    items: [
      { id: 0, name: 'protein shake', calories: 200 },
      { id: 0, name: 'chicken breast', calories: 100 },
      { id: 0, name: 'rice', calories: 50 }
    ],
    currentItem: null,
    totalCalories: 0
  };

  return {
    logData: function() {
      return data;
    }
  };
})();

//UI controller
const UICtrl = (function() {
  return {};
})();

// app controller
const AppCtrl = (function(ItemCtrl, UICtrl) {
  // public methods
  return {
    init: function() {
      console.log('init');
    }
  };
})(ItemCtrl, UICtrl);

AppCtrl.init();
