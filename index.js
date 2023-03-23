function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42);
  }

  function distanceFromHqInFeet(location) {
    return Math.abs(location - 42) * 264;
  }

    function distanceTravelledInFeet(start, destination){
        const feet = 264;
        let distance;
        if (start >= destination){
            distance = (start - destination) * feet;
        } else {
            distance = (destination - start) * feet;
        }
        return distance;
    }

    function calculatesFarePrice(start, destination){
        const distance = distanceTravelledInFeet(start, destination);
        const freeTrip = 400;
        let total;
        if (distance <= freeTrip){
            return 0; 
    } else if (distance > 400 && distance < 2000){
        total = (distance - freeTrip) * 0.02;
    } else if (distance > 2000 && distance < 2500){
        total = 25;
    } else 
        total = 'cannot travel that far'
        return total;
    }
    