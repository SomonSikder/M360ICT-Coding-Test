export interface Launch {
  flight_number: string;
  mission_name: String;
  mission_id: [];
  upcoming: boolean;
  launch_year: string;
  launch_date_unix: Number;
  launch_date_utc: Date;
  launch_date_local: Date;
  is_tentative: Boolean;
  tentative_max_precision: String;
  tbd: Boolean;
  launch_window: Number;
  rocket: {
    rocket_id: String;
    rocket_name: String;
    rocket_type: String;
    first_stage: {
      cores: [
        {
          core_serial: String;
          flight: Number;
          block: null;
          gridfins: Boolean;
          legs: Boolean;
          reused: Boolean;
          land_success: null;
          landing_intent: Boolean;
          landing_type: null;
          landing_vehicle: null;
        }
      ];
    };
    second_stage: {
      block: Number;
      payloads: [
        {
          payload_id: String;
          norad_id: [];
          reused: Boolean;
          customers: [String];
          nationality: String;
          manufacturer: String;
          payload_type: String;
          payload_mass_kg: Number;
          payload_mass_lbs: Number;
          orbit: "LEO";
          orbit_params: {
            reference_system: String;
            regime: String;
            longitude: null;
            semi_major_axis_km: null;
            eccentricity: null;
            periapsis_km: Number;
            apoapsis_km: Number;
            inclination_deg: Number;
            period_min: null;
            lifespan_years: null;
            epoch: null;
            mean_motion: null;
            raan: null;
            arg_of_pericenter: null;
            mean_anomaly: null;
          };
        }
      ];
    };

    fairings: {
      reused: Boolean;
      recovery_attempt: Boolean;
      recovered: Boolean;
      ship: null;
    };
  };
  ships: [];
  telemetry: {
    flight_club: null;
  };
  launch_site: {
    site_id: String;
    site_name: String;
    site_name_long: String;
  };
  launch_success: Boolean;
  launch_failure_details: {
    time: Number;
    altitude: null;
    reason: String;
  };
  links: {
    mission_patch: String;
    mission_patch_small: string;
    reddit_campaign: null;
    reddit_launch: null;
    reddit_recovery: null;
    reddit_media: null;
    presskit: null;
    article_link: String;
    wikipedia: String;
    video_link: String;
    youtube_id: String;
    flickr_images: [];
  };
  details: String;
  static_fire_date_utc: Date;
  static_fire_date_unix: Number;
  timeline: {
    webcast_liftoff: Number;
  };
  crew: null;
}
