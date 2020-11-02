# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class SbQuote(models.Model):
    quote_id = models.AutoField(primary_key=True)
    quote_name = models.CharField(max_length=100)
    quote_datetime = models.DateTimeField(blank=True, null=True)
    quote_optype = models.CharField(db_column='quote_OpType', max_length=100)  # Field name made lowercase.
    quote_flowtype = models.CharField(db_column='quote_FlowType', max_length=100)  # Field name made lowercase.
    quote_totsowhead = models.IntegerField(db_column='quote_TotSowHead')  # Field name made lowercase.
    quote_totmarkethead = models.IntegerField(db_column='quote_TotMarketHead')  # Field name made lowercase.
    quote_totpprm = models.DecimalField(db_column='quote_TotPPrm', max_digits=27, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    quote_qprm = models.DecimalField(db_column='quote_QPrm', max_digits=27, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    quote_sgcomm = models.DecimalField(db_column='quote_SGComm', max_digits=3, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    quote_lydcomm = models.DecimalField(db_column='quote_LydComm', max_digits=3, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    quote_netprm = models.DecimalField(db_column='quote_NetPrm', max_digits=27, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    quote_accepted = models.IntegerField(blank=True, null=True)
    quote_accepted_datetime = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'SB_quote'


class SbQuoteLoccvg(models.Model):
    quote = models.ForeignKey(SbQuote, related_name = 'pods', on_delete=models.CASCADE, null=True)
    quote_loc_id = models.AutoField(primary_key=True)
    quote_loc_type = models.CharField(max_length=45, blank=True, null=True)
    quote_head = models.PositiveIntegerField(db_column='quote_Head')  # Field name made lowercase.
    quote_headtype = models.CharField(db_column='quote_HeadType', max_length=45)  # Field name made lowercase.
    quote_loc_adr_string = models.TextField(blank=True, null=True)
    quote_loc_street = models.CharField(max_length=45, blank=True, null=True)
    quote_loc_city = models.CharField(max_length=45, blank=True, null=True)
    quote_loc_county = models.CharField(max_length=45, blank=True, null=True)
    quote_loc_state = models.CharField(max_length=45, blank=True, null=True)
    quote_loc_postcode = models.CharField(max_length=45, blank=True, null=True)
    quote_loc_country = models.CharField(max_length=45, blank=True, null=True)
    quote_loc_lat = models.DecimalField(max_digits=10, decimal_places=8, null=True)
    quote_loc_long = models.DecimalField(max_digits=11, decimal_places=8, null=True)
    quote_cov1_bin = models.BooleanField(default=0, db_column='quote_Cov1_Bin')  # Field name made lowercase.
    quote_cov1_val = models.FloatField(db_column='quote_Cov1_Val', blank=True, null=True)  # Field name made lowercase.
    quote_cov1_dur = models.DecimalField(db_column='quote_Cov1_Dur', max_digits=27, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    quote_cov1_pprm = models.DecimalField(db_column='quote_Cov1_PPrm', max_digits=27, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    quote_cov2_bin = models.BooleanField(default=0,db_column='quote_Cov2_Bin')  # Field name made lowercase.
    quote_cov2_val = models.FloatField(db_column='quote_Cov2_Val', blank=True, null=True)  # Field name made lowercase.
    quote_cov2_dur = models.DecimalField(db_column='quote_Cov2_Dur', max_digits=27, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    quote_cov2_pprm = models.DecimalField(db_column='quote_Cov2_PPrm', max_digits=27, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    quote_cov3_bin = models.BooleanField(default=0,db_column='quote_Cov3_Bin')  # Field name made lowercase.
    quote_cov3_val = models.FloatField(db_column='quote_Cov3_Val', blank=True, null=True)  # Field name made lowercase.
    quote_cov3_dur = models.DecimalField(db_column='quote_Cov3_Dur', max_digits=27, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    quote_cov3_pprm = models.DecimalField(db_column='quote_Cov3_PPrm', max_digits=27, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    quote_cov4_bin = models.BooleanField(default=0,db_column='quote_Cov4_Bin')  # Field name made lowercase.
    quote_cov4_val = models.FloatField(db_column='quote_Cov4_Val', blank=True, null=True)  # Field name made lowercase.
    quote_cov4_dur = models.DecimalField(db_column='quote_Cov4_Dur', max_digits=27, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    quote_cov4_pprm = models.DecimalField(db_column='quote_Cov4_PPrm', max_digits=27, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    quote_cov5_bin = models.BooleanField(default=0,db_column='quote_Cov5_Bin')  # Field name made lowercase.
    quote_cov5_val = models.FloatField(db_column='quote_Cov5_Val', blank=True, null=True)  # Field name made lowercase.
    quote_cov5_dur = models.DecimalField(db_column='quote_Cov5_Dur', max_digits=27, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    quote_cov5_pprm = models.DecimalField(db_column='quote_Cov5_PPrm', max_digits=27, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    quote_cov6_bin = models.BooleanField(default=0,db_column='quote_Cov6_Bin')  # Field name made lowercase.
    quote_cov6_val = models.FloatField(db_column='quote_Cov6_Val', blank=True, null=True)  # Field name made lowercase.
    quote_cov6_dur = models.DecimalField(db_column='quote_Cov6_Dur', max_digits=27, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    quote_cov6_pprm = models.DecimalField(db_column='quote_Cov6_PPrm', max_digits=27, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    quote_county_id = models.PositiveIntegerField( null=True)

    class Meta:
        managed = False
        db_table = 'SB_quote_loccvg'


class SbAsfFootprint(models.Model):
    county_id = models.PositiveIntegerField(primary_key=True)
    county_name = models.CharField(max_length=45, blank=True, null=True)
    county_state = models.CharField(max_length=45, blank=True, null=True)
    frequency = models.DecimalField(max_digits=15, decimal_places=15, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'SB_ASF_footprint'
