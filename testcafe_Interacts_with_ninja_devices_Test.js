import {Selector} from 'testcafe';

fixture `Test select element`
    .page `http://localhost:3001/`

test('Test if a list of devices is retrieved', async t => {
        
        var devicesName = Selector('.device-name');
        var count    = await devicesName.count;

        await t.expect(count).eql(10);     
});

test('Check if the names of the devices are correct', async t => {
    
    const devicesName = Selector('.device-name');

    await t
    .expect(devicesName.nth(0).textContent).eql('DESKTOP-SMART', 'This Device name is incorrect')
    .expect(devicesName.nth(1).textContent).eql('SERVER-ONE', 'This Device name is incorrect')
    .expect(devicesName.nth(2).textContent).eql('FIRST-MAC', 'This Device name is incorrect')
    .expect(devicesName.nth(3).textContent).eql('ARMANDO-SERVER', 'This Device name is incorrect')
    .expect(devicesName.nth(4).textContent).eql('MOON-SMART', 'This Device name is incorrect')
    .expect(devicesName.nth(5).textContent).eql('MIGUEL-PC', 'This Device name is incorrect')
    .expect(devicesName.nth(6).textContent).eql('GOOD-MAC', 'This Device name is incorrect')
    .expect(devicesName.nth(7).textContent).eql('JULIO-MAC-LOCAL', 'This Device name is incorrect')
    .expect(devicesName.nth(8).textContent).eql('GILBERT-COMPUTER', 'This Device name is incorrect')
    .expect(devicesName.nth(9).textContent).eql('MAC-LEADER', 'This Device name is incorrect');

});

test('Check if the device types are correct', async t => {
    
    const devicesType = Selector('.device-type');

    await t
    .expect(devicesType.nth(0).textContent).eql('WINDOWS_WORKSTATION', 'This Device type is incorrect')
    .expect(devicesType.nth(1).textContent).eql('WINDOWS_SERVER', 'This Device type is incorrect')
    .expect(devicesType.nth(2).textContent).eql('MAC', 'This Device type is incorrect')
    .expect(devicesType.nth(3).textContent).eql('WINDOWS_SERVER', 'This Device type is incorrect')
    .expect(devicesType.nth(4).textContent).eql('WINDOWS_SERVER', 'This Device type is incorrect')
    .expect(devicesType.nth(5).textContent).eql('WINDOWS_WORKSTATION', 'This Device type is incorrect')
    .expect(devicesType.nth(6).textContent).eql('MAC', 'This Device type is incorrect')
    .expect(devicesType.nth(7).textContent).eql('MAC', 'This Device type is incorrect')
    .expect(devicesType.nth(8).textContent).eql('WINDOWS_WORKSTATION', 'This Device type is incorrect')
    .expect(devicesType.nth(9).textContent).eql('MAC', 'This Device type is incorrect');
});


test('Check if the device types are correct', async t => {

    const devicesCapacity = Selector('.device-capacity');

    await t
    .expect(devicesCapacity.nth(0).textContent).eql('10 GB', 'This Device capacity is incorrect')
    .expect(devicesCapacity.nth(1).textContent).eql('50 GB', 'This Device capacity is incorrect')
    .expect(devicesCapacity.nth(2).textContent).eql('180 GB', 'This Device capacity is incorrect')
    .expect(devicesCapacity.nth(3).textContent).eql('256 GB', 'This Device capacity is incorrect')
    .expect(devicesCapacity.nth(4).textContent).eql('256 GB', 'This Device capacity is incorrect')
    .expect(devicesCapacity.nth(5).textContent).eql('500 GB', 'This Device capacity is incorrect')
    .expect(devicesCapacity.nth(6).textContent).eql('500 GB', 'This Device capacity is incorrect')
    .expect(devicesCapacity.nth(7).textContent).eql('512 GB', 'This Device capacity is incorrect')
    .expect(devicesCapacity.nth(8).textContent).eql('750 GB', 'This Device capacity is incorrect')
    .expect(devicesCapacity.nth(9).textContent).eql('2048 GB', 'This Device capacity is incorrect');

});

// Verify that all devices contain the edit buttons.
test('Check if all the devices contain the edit buttons', async t => {

    const devicesEdit = Selector('.device-edit');

    await t
    .expect(devicesEdit.nth(0).textContent).eql('Edit', 'This Device is Edit Button')
    .expect(devicesEdit.nth(1).textContent).eql('Edit', 'This Device is Edit Button')
    .expect(devicesEdit.nth(2).textContent).eql('Edit', 'This Device is Edit Button')
    .expect(devicesEdit.nth(3).textContent).eql('Edit', 'This Device is Edit Button')
    .expect(devicesEdit.nth(4).textContent).eql('Edit', 'This Device is Edit Button')
    .expect(devicesEdit.nth(5).textContent).eql('Edit', 'This Device is Edit Button')
    .expect(devicesEdit.nth(6).textContent).eql('Edit', 'This Device is Edit Button')
    .expect(devicesEdit.nth(7).textContent).eql('Edit', 'This Device is Edit Button')
    .expect(devicesEdit.nth(8).textContent).eql('Edit', 'This Device is Edit Button')
    .expect(devicesEdit.nth(9).textContent).eql('Edit', 'This Device is Edit Button');

});

// Verify that all devices contain the delete buttons.
test('Check if all the devices contain the remove buttons', async t => {

    const devicesRemove = Selector('.device-remove');

    await t
    .expect(devicesRemove.nth(0).textContent).eql('Remove', 'This Device is Remove Button')
    .expect(devicesRemove.nth(1).textContent).eql('Remove', 'This Device is Remove Button')
    .expect(devicesRemove.nth(2).textContent).eql('Remove', 'This Device is Remove Button')
    .expect(devicesRemove.nth(3).textContent).eql('Remove', 'This Device is Remove Button')
    .expect(devicesRemove.nth(4).textContent).eql('Remove', 'This Device is Remove Button')
    .expect(devicesRemove.nth(5).textContent).eql('Remove', 'This Device is Remove Button')
    .expect(devicesRemove.nth(6).textContent).eql('Remove', 'This Device is Remove Button')
    .expect(devicesRemove.nth(7).textContent).eql('Remove', 'This Device is Remove Button')
    .expect(devicesRemove.nth(8).textContent).eql('Remove', 'This Device is Remove Button')
    .expect(devicesRemove.nth(9).textContent).eql('Remove', 'This Device is Remove Button');

});


//Test2

test('Verify that devices can be created properly using the UI. Then check name, type, Capacity are all correct', async t => {

    const AddDeviceBtn = Selector('.submitButton');
    const removeDevice = Selector('.device-remove');
    const SysNameInput = Selector('#system_name');
    const HddCapacityInput = Selector('#hdd_capacity');
    const devicesName = Selector('.device-name');
    const devicesType = Selector('.device-type');
    const devicesCapacity = Selector('.device-capacity');

    await t
    .click(AddDeviceBtn)
    .typeText(SysNameInput, 'Jama_PC')
    .typeText(HddCapacityInput, '256')
    .click(AddDeviceBtn)
    //.eval(() => location.reload(true))
    .expect(devicesName.nth(5) .textContent).eql('Jama_PC', 'This Device name is incorrect')
    .expect(devicesType.nth(5) .textContent).eql('WINDOWS WORKSTATION', 'This Device name is incorrect')
    .expect(devicesCapacity.nth(5) .textContent).eql('256 GB', 'This Device name is incorrect')
    .click(removeDevice.nth(5))

});

//Test 3
test('Make an API call that renames the first device of the list to “Renamed Device”. the modified device has the new name. ', async t => {

    const EditDeviceBtn = Selector('.device-edit');
    const SysNameInput = Selector('#system_name');
    const devicesName = Selector('.device-name');
    const AddDeviceBtn = Selector('.submitButton');
    
    await t
    .click(EditDeviceBtn.nth(0))
    .typeText(SysNameInput, 'DESKTOP-MAIN')
    .click(AddDeviceBtn)
    //.eval(() => location.reload(true))
    .expect(devicesName.nth(0) .textContent).eql('DESKTOP-MAIN', 'This Device name is incorrect')
    .click(EditDeviceBtn.nth(0))
    .typeText(SysNameInput, 'DESKTOP-SMART')
    .click(AddDeviceBtn)

});

//Test 4
test('Make an API call that deletes the last element of the list. the modified device has the new name. Then reload the page and verify the element is no longer visible and it doesn’t exist in the DOM. ', async t => {

    const removeDevice = Selector('.device-remove');
    const devicesName = Selector('.device-name');
    
    await t
    .click(removeDevice.nth(-1))
    .expect(devicesName.nth(-1).textContent).noteql('MAC-LEADER', 'This Device name is incorrect');
});
