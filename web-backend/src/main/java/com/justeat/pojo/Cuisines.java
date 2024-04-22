package com.justeat.pojo;

import java.util.List;

public class Cuisines {
	private List<Cuisine> cuisines;

	public Cuisines() {
	}

	public Cuisines(List<Cuisine> cuisines) {
		this.cuisines = cuisines;
	}

	public List<Cuisine> getCuisines() {
		return cuisines;
	}

	public void setCuisines(List<Cuisine> cuisines) {
		this.cuisines = cuisines;
	}
}
