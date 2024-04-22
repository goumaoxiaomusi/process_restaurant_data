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


@Slf4j
@RestController
public class RestaurantController {
	@Autowired
	private RestaurantService restaurantService;

	@GetMapping(value = "/restaurant/{postcode}")
	public ResponseEntity<List<Restaurant>> getResByPostCode(@PathVariable String postcode) throws JsonProcessingException {
		List<Restaurant> restaurants = restaurantService.getRestaurants(postcode);
		return ResponseEntity.ok(restaurants);
	}

}
