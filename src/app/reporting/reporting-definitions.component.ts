/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import {Component, OnInit} from '@angular/core';
import {ReportingService} from '../services/reporting/reporting.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {ReportDefinition} from '../services/reporting/domain/report-definition.model';

@Component({
  templateUrl: './reporting-definitions.component.html'
})
export class ReportingDefinitionsComponent implements OnInit {

  reportDefinitions$: Observable<ReportDefinition[]>;

  constructor(private router: Router, private route: ActivatedRoute, private reportingService: ReportingService) {}

  ngOnInit(): void {
    this.reportDefinitions$ = this.route.params
      .switchMap(params => this.reportingService.fetchReportDefinitions(params['category']));
  }

  goToReport(identifier: string): void {
    this.router.navigate(['reports', identifier], { relativeTo: this.route });
  }
}
