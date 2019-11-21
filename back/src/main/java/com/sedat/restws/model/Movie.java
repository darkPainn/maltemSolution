package com.sedat.restws.model;

public class Movie {	
	
	private String title;
	private String director;
	private String releaseDate;
	private String type;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDirector() {
		return director;
	}
	public void setDirector(String director) {
		this.director = director;
	}
	
	public String getReleaseDate() {
		return releaseDate;
	}
	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	@Override
	public String toString() {
		return "Movie [title=" + title + ", director=" + director + ", releaseDate=" + releaseDate + ", type=" + type
				+ "]";
	}

}
