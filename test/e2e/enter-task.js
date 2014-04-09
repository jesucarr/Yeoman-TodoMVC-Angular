/*global describe, it, beforeEach, inject, expect*/

  'use strict';

  describe('Enter Task', function() {
    it('should add a new task', function() {
      browser.get('/#/');
      // input('newTodo').enter('task1');
      // element(':form#new-todo').submit();
      // expect(repeater('ul#todo-list li').count()).toEqual(1);

      //   var trueFuture = angular.scenario.Future(
      // {name:"a true value"},            // name that is displayed in the results
      // function(callback) {       // "behavior" function
      //     callback(null, true);  // supposed to call callback with (error, result)
      // });

      //   expect(trueFuture).toEqual(true);


      element(by.model('newTodo')).sendKeys('Task1\n');
      expect(element.all(by.repeater('todo in todos')).count()).toEqual(1);
    });
  });
