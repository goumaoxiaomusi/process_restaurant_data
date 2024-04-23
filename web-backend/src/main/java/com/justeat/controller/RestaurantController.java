package com.justeat.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.justeat.pojo.Restaurant;
import com.justeat.service.RestaurantService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

/*
This controller map the
 */
@Slf4j
@RestController
public class RestaurantController {
	// Auto-injecting the RestaurantService dependency
	@Autowired
	private RestaurantService restaurantService;

	// Mapping HTTP GET requests for '/restaurant/{postcode}' to this method
	@GetMapping(value = "/restaurant/{postcode}")
	public ResponseEntity<List<Restaurant>> getResByPostCode(@PathVariable String postcode) throws JsonProcessingException {
		// Calling the service layer to get restaurants based on the provided postcode
		List<Restaurant> restaurants = restaurantService.getRestaurants(postcode);
		// Returning the list of restaurants wrapped in a ResponseEntity with an OK status
		return ResponseEntity.ok(restaurants);
	}

}
