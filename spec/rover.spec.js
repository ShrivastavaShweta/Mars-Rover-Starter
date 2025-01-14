const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!
  it("constructor sets position and default values for mode and generatorWatts", function(){
    let rover = new Rover(98382);
    expect(rover.position).toEqual(98382);
    expect(rover.mode).toBe('NORMAL');
    expect(rover.generatorWatts).toEqual(110);
  });

  it("response returned by receiveMessage contains the name of the message", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);

    expect(response.message).toBe('Test message with two commands');
  })

});
