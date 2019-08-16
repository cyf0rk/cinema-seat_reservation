let Movie = {
      render: async () => {
        return /*html*/ `
            <section class="section">
              <div style="max-width: 1200px; margin: 0 auto; padding: 10px;">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-5 border text font-weight-bold">
                      Movie name
                    </div>
                    <div class="col-md-1 border text movieDate">mon 5.8.2019.</div>
                    <div class="col-md-1 border text movieDate">tue 6.8.2019.</div>
                    <div class="col-md-1 border text movieDate">wed 7.8.2019.</div>
                    <div class="col-md-1 border text movieDate">thu 8.8.2019.</div>
                    <div class="col-md-1 border text movieDate">fri 9.8.2019.</div>
                    <div class="col-md-1 border text movieDate">sat 10.8.2019.</div>
                    <div class="col-md-1 border text movieDate">sun 11.8.2019.</div>
                  </div>
                  <div class="row general">
                    <div class="col-md-5 border">
                      <img src="img/general.jpg" class="img-responsive" alt="General"><dl class="d-inline-block text"><dt>General</dt> <dd>Biography, History</dd><dt>Preview</dt></dl>
                    </div>
                    <div class="col-md-1 border text">Extreme 2D <br> <a class="btn btn-primary btn-sm general" data-value="1400General">14:00</a></div>
                    <div class="col-md-1 border text">Extreme 2D <br> <a class="btn btn-primary btn-sm general" data-value="1705General">17:05</a></div>
                    <div class="col-md-1 border text">Extreme 2D <br> <a class="btn btn-primary btn-sm general" data-value="2015General">20:15</a></div>
                    <div class="col-md-1 border text"></div>
                    <div class="col-md-1 border text"></div>
                    <div class="col-md-1 border text"></div>
                    <div class="col-md-1 border text"></div>
                  </div>
                    <div class="row">
                      <div class="col-md-5 border">
                        <img src="img/it.jpg" alt="IT"><dl class="d-inline-block text"><dt>IT: Second Chapter</dt> <dd>Horror, Thriller</dd> <dt>Preview</dt></dl>
                      </div>
                    <div class="col-md-1 border text"></div>
                    <div class="col-md-1 border text"></div>
                    <div class="col-md-1 border text">Extreme 2D <br> <a class="btn btn-primary btn-sm it" data-value="2000IT">20:00</a></div>
                    <div class="col-md-1 border text"></div>
                    <div class="col-md-1 border text"></div>
                    <div class="col-md-1 border text"></div>
                    <div class="col-md-1 border text"></div>
                  </div>
                    <div class="row">
                      <div class="col-md-5 border">
                        <img src="img/faf.jpg" alt="F&F"><dl class="d-inline-block text"><dt>Fast & Furious: Hobbs & Shaw</dt> <dd>Action, Thriller</dd></dl>
                      </div>
                    <div class="col-md-1 border text">2D <br> <a class="btn btn-primary btn-sm faf" data-value="1645F&F">16:45</a></div>
                    <div class="col-md-1 border text">2D <br> <a class="btn btn-primary btn-sm faf" data-value="1930F&F">19:30</a></div>
                    <div class="col-md-1 border text">2D <br> <a class="btn btn-primary btn-sm faf" data-value="2215F&F">22:15</a></div>
                    <div class="col-md-1 border text"></div>
                    <div class="col-md-1 border text"></div>
                    <div class="col-md-1 border text"></div>
                    <div class="col-md-1 border text"></div>
                  </div>
                    <div class="row">
                      <div class="col-md-5 border">
                        <img src="img/stepup.jpg" alt="Step Up"><dl class="d-inline-block text"><dt>Step Up: Year of the Dance</dt> <dd>Musical</dd></dl>
                      </div>
                    <div class="col-md-1 border text">2D <br> <a class="btn btn-primary btn-sm stepup" data-value="1830StepUp">18:30</a></div>
                    <div class="col-md-1 border text">2D <br> <a class="btn btn-primary btn-sm stepup" data-value="1830StepUp">18:30</a></div>
                    <div class="col-md-1 border text">2D <br> <a class="btn btn-primary btn-sm stepup" data-value="1830StepUp">18:30</a></div>
                    <div class="col-md-1 border text"></div>
                    <div class="col-md-1 border text"></div>
                    <div class="col-md-1 border text"></div>
                    <div class="col-md-1 border text"></div>
                  </div>
                </div>
              </div>
            </section>
            `}
            , after_render: async () => {
                  $('.btn').click(function() {
                    let ticketDetails = $(this).text;
                    let id = $(this).data('value');
                      window.location = "/#/tickets/" + id;
                  });
            }
        };

export default Movie;
